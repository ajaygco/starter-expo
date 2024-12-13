// Component
export const If = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children,
}) => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};
