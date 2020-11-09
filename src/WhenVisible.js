import useVisibleAnimation from "./useVisibleAnimation";

function WhenVisible({ as: As, initial, visible, ...rest }) {
  const visibleProps = useVisibleAnimation({ initial, visible });
  return <As {...visibleProps} {...rest} />;
}

export default WhenVisible;
