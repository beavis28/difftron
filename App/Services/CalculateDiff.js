import { createPatch } from 'diff';
import diff2html from 'diff2html';

export default function createDiff(left, right, format, split) {
  const rawDiff = createPatch('result', left, right, 'before', 'after');
  let contents = '';
  if (format === 'unified') {
    contents = rawDiff;
  } else {
    // diff2html
    const d2h = diff2html.Diff2Html;
    const htmlString = d2h.getPrettyHtml(rawDiff, { outputFormat: split });
    contents = htmlString;
  }
  return [rawDiff, contents];
}
