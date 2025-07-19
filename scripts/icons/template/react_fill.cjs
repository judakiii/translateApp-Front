/** @type {import('@svgr/core').Template} */
const template = ({ componentName, jsx }, { tpl }) => {
  jsx.openingElement.attributes = jsx.openingElement.attributes.filter(
    (attr) => {
      return !(
        attr.type === "JSXAttribute" &&
        (attr.name.name === "width" || attr.name.name === "height")
      );
    }
  );

  const updateColorAttributes = (node) => {
    if (!node || !node.openingElement) return;

    node.openingElement.attributes = node.openingElement.attributes.map(
      (attr) => {
        if (
          attr.type === "JSXAttribute" &&
          (attr.name.name === "stroke" || attr.name.name === "fill")
        ) {
          return {
            ...attr,
            value: {
              type: "JSXExpressionContainer",
              expression: { type: "Identifier", name: "color" },
            },
          };
        }
        return attr;
      }
    );

    if (node.children && node.children.length) {
      node.children.forEach(updateColorAttributes);
    }
  };

  updateColorAttributes(jsx);

  jsx.openingElement.attributes.push(
    {
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "width" },
      value: {
        type: "JSXExpressionContainer",
        expression: { type: "Identifier", name: "sizeInPixel" },
      },
    },
    {
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "height" },
      value: {
        type: "JSXExpressionContainer",
        expression: { type: "Identifier", name: "sizeInPixel" },
      },
    },
    {
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "className" },
      value: {
        type: "JSXExpressionContainer",
        expression: { type: "Identifier", name: "variant" },
      },
    }
  );

  return tpl`
  import PropTypes from 'prop-types';

  export const ${
    componentName + "Icon"
  } = ({ size = 24, color = "#fff", variant = "" }) => {
    const sizeInPixel = \`\${size}px\`;

    return ${jsx};
  };

  ${componentName + "Icon"}.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    variant: PropTypes.string,
  };

  ${componentName + "Icon"}.defaultProps = {
    size: 18,
    color: 'black',
    variant: '',
  };
`;
};

module.exports = template;
