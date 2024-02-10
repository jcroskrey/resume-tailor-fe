import HomeNavBar from "../navbar"

export default function CreatePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <HomeNavBar />
        {children}
      </section>
    )
  }