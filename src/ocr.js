import { createWorker } from 'tesseract.js';

const parm = document.querySelector("#pa");

const worker = createWorker({
    logger: m => { parm.innerHTML = JSON.stringify(m)}
});

const loadTessaract = async (src) => {

    await worker.load();
    await worker.loadLanguage('kor');
    await worker.initialize('kor');
    const start = new Date();
    const { data: { text } } = await worker.recognize(src);
    console.log(new Date() - start);
    console.log(text);
    await worker.terminate();

    return text;
}


export { loadTessaract };