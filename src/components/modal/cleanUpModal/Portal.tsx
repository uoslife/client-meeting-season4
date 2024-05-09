import reactDom from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal') as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
