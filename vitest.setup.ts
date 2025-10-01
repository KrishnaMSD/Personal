import "@testing-library/jest-dom/vitest";
import "whatwg-fetch";

Object.defineProperty(window.HTMLCanvasElement.prototype, "getContext", {
  value: () => null,
});
