import LoginForm from "@/components/login-form";

export default function LoginPage() {
  const width = "w-full sm:max-w-[75vw] md:max-w-[50vw] xl:max-w-[30vw]";

  return (
    <main className="p-6">
      <LoginForm className={width + " mx-auto my-46"} />
    </main>
  );
}
