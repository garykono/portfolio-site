import { siteConfig } from "../config/site";
import { DotList } from "./DotList";

export default function Footer() {
    return (
        <div className="flex justify-center mt-20 py-5 border-t border-black/10">
            <DotList
                items={[
                    "© 2025", 
                    <a href="/">Portfolio</a>,
                    <a href={siteConfig.github}>Github</a>,
                    <a href={siteConfig.featuredSite}>Terrarecipes</a>,
                ]}
            />
        </div>
    );
}