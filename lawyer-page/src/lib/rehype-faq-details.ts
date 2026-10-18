/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Rehype-плагин (build-time). Находит в HTML-AST статьи заголовок
 * <h2>Ответы на частые вопросы</h2> и оборачивает каждую пару
 * <h3>Вопрос</h3> + следующий контент до следующего <h3> (или до конца)
 * в <details class="faq-item"><summary class="faq-q">Вопрос</summary>…</details>.
 *
 * HTML-разметка одинакова и на мобилке, и на десктопе — поведение разводится
 * чисто CSS: на десктопе details принудительно "раскрыт" (display: block),
 * на мобилке — нативный аккордеон <details>, без JS.
 */
export default function rehypeFaqDetails() {
  return (tree: any) => {
    const FAQ_HEADING = 'Ответы на частые вопросы';
    const children: any[] = tree.children;

    let faqStart = -1;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.type !== 'element' || node.tagName !== 'h2') continue;
      if (getText(node).trim() === FAQ_HEADING) {
        faqStart = i;
        break;
      }
    }
    if (faqStart === -1) return;

    const after = children.splice(faqStart + 1);
    const output: any[] = [];
    let current: any = null;

    for (const node of after) {
      if (node.type === 'element' && node.tagName === 'h2') {
        if (current) output.push(current);
        current = null;
        output.push(node);
        continue;
      }
      if (node.type === 'element' && node.tagName === 'h3') {
        if (current) output.push(current);
        current = {
          type: 'element',
          tagName: 'details',
          properties: { className: ['faq-item'] },
          children: [
            {
              type: 'element',
              tagName: 'summary',
              properties: { className: ['faq-q'] },
              children: node.children,
            },
          ],
        };
        continue;
      }
      if (current) current.children.push(node);
      else output.push(node);
    }
    if (current) output.push(current);
    children.push(...output);
  };
}

function getText(node: any): string {
  let out = '';
  for (const child of node.children || []) {
    if (typeof child.value === 'string') out += child.value;
    else if (child.type === 'element') out += getText(child);
  }
  return out;
}
