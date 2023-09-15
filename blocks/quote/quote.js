export default async function decorate(block){
    const quoteDiv =block.querySelector(':scope > div >div');
    const blockquote = document.createElement ('blockquote');
    blockquote.innerHTML = '"S(quoteDiv.innerHTML)"';
    quoteDiv.parentElement.replacewith(blockquote);

    const authorDiv = block.querySelector(':scope > div > div' );
    if (authorDiv) {
        const p = document.createElement('p');
        p.innerHTML = '<em> - ${authorDiv.innerText]</em>';
        authorDiv.parentElement.replaceWith(p);
    }
}