type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="bg-white[2%] mx-auto flex min-h-screen max-w-7xl flex-col">{children}</div>;
}
