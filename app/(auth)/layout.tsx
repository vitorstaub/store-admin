export default function AuthLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex itens-center justify-center mt-36">
      {children}
    </div>
  )
}