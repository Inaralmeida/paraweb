import { useEffect, useState } from "react";
import styled from "styled-components";
import { TranscriptionProps } from "../../core/interfaces";

interface TranscriptionComponentProps {
  transcription: TranscriptionProps[];
  currentTime: number;
}

interface textTranscription {
  text: string;
  time: string;
  isVisible: boolean;
  startTime: number;
  endTime: number;
}

const Transcription = ({
  transcription,
  currentTime,
}: TranscriptionComponentProps) => {
  function timeToMilliseconds(timeString: string) {
    const [minutes, seconds] = timeString.split(":");
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds;
  }
  const textsTranscriptions = transcription.map((segment) => {
    return {
      text: segment.text,
      time: `[${segment.startTime} - ${segment.endTime}]`,
      isVisible: false,
      startTime: timeToMilliseconds(segment.startTime),
      endTime: timeToMilliseconds(segment.endTime),
      className: "",
    };
  });

  const [listTextRender, setListTextRender] = useState<unknown>();

  useEffect(() => {
    const currentText = textsTranscriptions.map((text) => {
      if (text.startTime <= currentTime && text.endTime >= currentTime) {
        return {
          ...text,
          isVisible: true,
          className: "highlight",
        };
      } else {
        return {
          ...text,
          isVisible: false,
          className: "normal",
        };
      }
    });
    setListTextRender((prev: textTranscription[]) => {
      const currentIndex = currentText.findIndex((text) => text.isVisible);
      if (currentIndex == 0) {
        prev = [
          currentText[currentIndex],
          currentText[currentIndex + 1],
          currentText[currentIndex + 2],
        ];
      } else if (currentIndex > 0) {
        prev = [
          currentText[currentIndex - 1],
          currentText[currentIndex],
          currentText[currentIndex + 1],
        ];
      } else if (currentIndex === currentText.length - 2) {
        prev = [
          currentText[currentIndex - 2],
          currentText[currentIndex - 1],
          currentText[currentIndex],
        ];
      }
      return prev;
    });

  }, [currentTime]);
  
  return (
    <StyleDescription>
      {Array.isArray(listTextRender) &&
        listTextRender.length > 0 &&
        listTextRender.map((segment, index) => (
          <span key={index} className={segment?.className}>
            <p>
              {" "}
              <small>{segment?.time}</small> {segment?.text}
            </p>
          </span>
        ))}
    </StyleDescription>
  );
};

export default Transcription;

const StyleDescription = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  height: auto;
  border-radius: 16px;
  background-color: #f1f2f4;

  > span {
    font-size: 1.6rem;
    word-wrap: break-word;
    gap: 2px;

    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  > .normal {
    p,
    small {
      color: #ccc;
    }
  }

  > .highlight {
    p,
    small {
      color: black;
      font-size: 1.8rem;
      font-weight: bold;
    }

    position: relative;
    top: 0;
  }
`;
