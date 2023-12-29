export default function copyToClipboard(txt: string) {
  const textArea = document.createElement('textarea');
  textArea.value = txt;
  document.body.appendChild(textArea);
  textArea.select();
  navigator.clipboard.writeText(textArea.value);
  textArea.remove();
}
