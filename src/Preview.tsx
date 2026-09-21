interface PreviewProps {
  children: React.ReactNode;
}
const Preview = (props: PreviewProps) => (
  <div className="preview-section">{props.children}</div>
);

export default Preview;
