import Layout from "@/components/layout";

export default function Error() {
    return (
        <>
            <Layout
            meta={{ title: 'Page not found | GlobPanel' }}
            >
                <section className="error-container ">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
                <h1 className="z-10 text-4xl mx-4 text-center w-full font-mono">Looks like you are lost.</h1>
                <h1 className="z-10 text-2xl mx-4 text-center w-full font-mono">You are at Invalid page which does not exists or may be removed.</h1>
            </Layout>
        </>
    )
}