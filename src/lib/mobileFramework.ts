const USE_REACT_NATIVE =
  process.env.NEXT_PUBLIC_USE_REACT_NATIVE === "true" ||
  process.env.NEXT_PUBLIC_USE_REACT_NATIVE === "1";
const USE_JAVASCRIPT_INSTEAD_OF_DART =
  process.env.NEXT_PUBLIC_USE_JAVASCRIPT_INSTEAD_OF_DART === "true" ||
  process.env.NEXT_PUBLIC_USE_JAVASCRIPT_INSTEAD_OF_DART === "1";

export const isReactNative = USE_REACT_NATIVE;

// Used for display text across the site.
export const MOBILE_FRAMEWORK = USE_REACT_NATIVE ? "React Native" : "Flutter";

// Useful for sentences where the framework name is mid-sentence.
export const MOBILE_FRAMEWORK_LOWER = USE_REACT_NATIVE
  ? "react native"
  : "flutter";

export const MOBILE_LANGUAGE = USE_JAVASCRIPT_INSTEAD_OF_DART
  ? "Javascript"
  : "Dart";

