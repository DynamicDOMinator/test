import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroSectionCards from "./components/HeroSectionCards";
import SliderProducts from "./components/SliderProducts";
import DetailsProducts from "./components/DetailsProducts";
import { Route, Routes } from "react-router-dom";
import { ProductsData } from "./components/ProductsData";
import ReviewsSection from "./components/ReviewsSection";
import QuestionsSlider from "./components/QuestionsSlider";
import Footer from "./components/Footer";
export default function App() {
  return (
    <ProductsData>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HeroSectionCards />
              <SliderProducts />
              <ReviewsSection/>
              <QuestionsSlider/>
            </>
          }
        />
        <Route path="/details/:id" element={<DetailsProducts />} />
      </Routes>
      <Footer/>
    </ProductsData>
  );
}
