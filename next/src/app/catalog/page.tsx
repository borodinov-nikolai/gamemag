import React from "react";
import styles from "./catalog.module.scss";
import { getGenres, getPlatforms, getProducts } from "@/http/cmsAPI";
import ProductCard from "@/components/CatalogPage/productCard";
import Genres from "@/components/CatalogPage/filters/categories/genres";
import QueryBuilder from "@/components/CatalogPage/filters/queryBuilder";
import Search from "@/components/CatalogPage/filters/search";
import Sort from "@/components/CatalogPage/filters/sort";
import Paginations from "@/components/CatalogPage/pagination";
import qs from "qs";
import { ProductData } from "@/interfaces/Products";
import { DefaultValues } from "@/interfaces/App";
import Platforms from "@/components/CatalogPage/filters/categories/platforms";
import Mobile_platforms from "@/components/CatalogPage/filters/mobile_categories/mobile_platforms";

export const dynamic = "force-dynamic";

const Catalog = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  

  const queryString = qs.stringify(searchParams);

  const products = await getProducts(queryString);
  const platforms = await getPlatforms();
  const genres = await getGenres();

  const parsedQS: unknown = qs.parse(queryString);

  const defaultValues = parsedQS as DefaultValues;

  return (
    <div className={styles.root}>
      <QueryBuilder defaultValues={defaultValues} />

      <div className={styles.mobile_navbar} > 
      <div className={styles.mobile_platforms}>
       {platforms &&  <Mobile_platforms data={platforms} defaultValue={defaultValues?.filters?.platforms?.name} />}
      </div>
      {/* <div className={styles.mobile_genres}>

      </div> */}
       </div>
    
      <div className={styles.platforms}>
        { platforms && <Platforms data={platforms}  defaultValue={defaultValues?.filters?.platforms?.name} />}
      </div>

      <div className={styles.search}>
        {" "}
        <Search />{" "}
      </div>
      <div className={styles.sort}>
        <span>Сортировка:</span>
        <Sort defaultValue={defaultValues?.sort?.[0]} />
      </div>

      <div className={styles.genres_title}>Категории:</div>
      <div className={styles.genres}>
        {genres && <Genres data={genres} defaultValue={defaultValues?.filters?.genres?.name} />}
      </div>
      <div className={styles.product_cards}>
        { products && products.data.map((product: ProductData) => {
          return (
            <div key={product.id} className={styles.product_card}>
              <ProductCard  product={product} size="medium" />
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Paginations
          value={products?.meta?.pagination}
          defaultValue={defaultValues?.pagination}
        />
      </div>
    </div>
  );
};

export default Catalog;
