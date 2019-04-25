type SleepFunction = (ms: number) => Promise<void>

export const createTextMutator = (sleep: SleepFunction, getCurrentNonce: () => number) => {

  return async (fromText: string, toText: string, nonce: number, set: (text: string) => void) => {
    const duration = 500; // ms
    const textLengthDiff = fromText.length - toText.length;
    let changedText = fromText;

    for (let i = 0; i < toText.length + Math.max(0, textLengthDiff); i++) {

      if (i < toText.length) {
        changedText = toText.substr(0, i+1)
          + fromText.substr(i+1, fromText.length);
      }

      const lettersToRemove = Math.max(0, Math.min(i+1, textLengthDiff));

      set(changedText.substr(0, changedText.length-lettersToRemove));

      await sleep(duration/toText.length)

      // Prevents running several animations on same text concurrently
      if (nonce !== getCurrentNonce()) {
        return;
      }
    }
  }
}
