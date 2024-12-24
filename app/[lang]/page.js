import MainBanner from "@/components/MainBanner";
import ParquetSanding from "@/components/ParquetSanding";
import ParquetInstallation from "@/components/ParquetInstallation";
import ParquetRefinishing from "@/components/ParquetRefinishing";
import LocalRestoration from "@/components/LocalRestoration";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";

async function getHomePage() {
    const res = await fetch(`${process.env.API_URL}/service/home-page`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

export default async function Home() {

    const homePage = await getHomePage();
    // console.log(homePage)

  return (
      <>
          {homePage && homePage.main_banner ? <MainBanner banner={homePage.main_banner}/> : null}
          {homePage && homePage.parquet_sanding ? <ParquetSanding props={homePage.parquet_sanding}/> : null}
          {homePage && homePage.parquet_installation ? <ParquetInstallation props={homePage.parquet_installation}/> : null}
          {homePage && homePage.parquet_refinishing ? <ParquetRefinishing props={homePage.parquet_refinishing}/> : null}
          {homePage && homePage.local_restoration ? <LocalRestoration props={homePage.local_restoration}/> : null}
          {homePage && homePage.about_us ? <AboutUs props={homePage.about_us}/> : null}
          {homePage && homePage.projects ? <Projects props={homePage.projects}/> : null}
          {homePage && homePage.reviews ? <Reviews props={homePage.reviews}/> : null}
        <Contacts/>
      </>
  );
}


