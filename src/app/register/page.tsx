import SignupForm from "@/components/signup-form";

export default function RegisterPage() {
    const width = "w-full sm:max-w-[75vw] md:max-w-[50vw] xl:max-w-[30vw]";

    return (
        <main className="p-6">
            <SignupForm className={width + " mx-auto my-46"} />
        </main>
    )
}