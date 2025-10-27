import React from "react";
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import Question from "../components/Question";

jest.useFakeTimers();

const testQuestion = {
  question: "Sample question?",
  answers: ["A", "B", "C"],
  correctAnswer: "C"
};

test("decrements the timer by 1 every second", () => {
  const noop = jest.fn();
  render(<Question question={testQuestion} onAnswered={noop} />);

  expect(screen.getByText("10 seconds remaining")).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(screen.getByText("9 seconds remaining")).toBeInTheDocument();
});
