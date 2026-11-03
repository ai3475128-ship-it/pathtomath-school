import React from "react";
import katex from "katex";
function createMath(displayMode) {
  return function MathContent({ math, children, errorColor, renderError }) {
    const source = String(math ?? children ?? "");
    try {
      const html = katex.renderToString(source, {
        displayMode,
        errorColor,
        throwOnError: Boolean(renderError),
        trust: false,
        strict: "ignore",
        maxExpand: 1000,
      });
      return React.createElement(displayMode ? "div" : "span", {
        "data-testid": "react-katex",
        dangerouslySetInnerHTML: { __html: html },
      });
    } catch (error) {
      if (renderError) return renderError(error);
      throw error;
    }
  };
}
export const InlineMath = createMath(false);
export const BlockMath = createMath(true);
