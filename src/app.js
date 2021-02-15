import { createWorker } from 'tesseract.js';

const container = document.querySelector(".container");


const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('kor');
  await worker.initialize('kor');
  const start = new Date();
  const { data: { text } } = await worker.recognize('assets/meat.jpg');
  console.log(new Date() - start);
  console.log(text);
  await worker.terminate();

  container.innerHTML = text;
})();