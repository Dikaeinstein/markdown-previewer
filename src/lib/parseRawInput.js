import marked from 'marked';

const parseRawInput = (value) => {
  const rawMarkup = marked(value, { sanitize: true });
  return { __html: rawMarkup };
};

export default parseRawInput;
