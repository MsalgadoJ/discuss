import ClientAnimation from "./common/client-animation";
export default function Footer() {
  return (
    <ClientAnimation type="fadeIn" direction="downUp">
      <div className="text-stone-200 flex items-center justify-center mx-auto min-h-[30px]">
        <p className="text-xs text-center">
          Project developed by{" "}
          <a
            className="inline-block transition-all hover:underline"
            href="https://www.linkedin.com/in/mayrarincones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayra Rincones
          </a>{" "}
          in the scope of Stephen Grider's NextJs course
        </p>
      </div>
    </ClientAnimation>
  );
}
