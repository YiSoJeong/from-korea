const render = () => `
  <div class="main-container">
    <div class="main">
      <div class="row">
        <aside class="sidebar">
          <div class="side-menu-wrapper">
            <div class="side-menu">
              <div class="side-menu__item">
                <div class="side-menu__title">Popular Categories</div>
              </div>
              <div class="side-menu__item">Electronics</div>
              <div class="side-menu__item">Backpacks & Fashion Bags</div>
              <div class="side-menu__item">Gaming & Accessories</div>
              <div class="side-menu__item">Sporting Goods</div>
              <div class="side-menu__item">Travel & Clothing</div>
              <div class="side-menu__item">Computer</div>
              <div class="side-menu__item">Home & Kitchen</div>
            </div>
            <div class="side-banner">
              <div class="side-banner__img">
                  <img src="/images/banner2.jpg" alt="banner"/>
              </div>
              <div class="side-banner__content">
                <h4>ULTIMATE SALE</h4>
                <h3>UP TO 70%</h3>
                <p>Discount Selected Items</p> 
              </div>
            </div>
            <div class="products">
              <h4>Popular Products</h4>
              <div class="product-list">
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product10.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Hand Electric cell</h3>
                    <span>$26.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product11.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Man's Fashion Hood</h3>
                    <span>$39.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product12.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Women's Fashion Jeans Clothing</h3>
                    <span>$199.00</span>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </aside>
        <div class="main-content-container">
          <div class="slider-container">
            <div class="slider">
              <div class="slider__item">
                <img src="/images/sample1.jpg" alt="ads"/>
              </div>
              <div class="slider__item">
                <img src="/images/sample1.jpg" alt="ads"/>
              </div>
              <div class="slider__item">
                <img src="/images/sample1.jpg" alt="ads"/>
              </div>
            </div>
            <div class="slider-btn btn-left"><</div>
            <div class="slider-btn btn-right">></div>
            <div class="slider-controller">
            </div>
          </div>
          <div class="order-manual">
            <div class="order-manual__item">
              <img src="/images/banner1.jpg" alt="img"/>
            </div>
            <div class="order-manual__item">
              <img src="/images/banner3.jpg" alt="img"/>
            </div>
          </div>
          <div class="featured-product">
            <div class="featured-product__title-wrapper">
              <div class="featured-product__title">Featured Product</div>
              <div class="featured-product__more">
                <a>VIEW MORE ⌲</a>
              </div>
            </div>
            <div class="featured-product__list">
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/1.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">WOMEN'S</div>
                  <div class="featured-product__list__item__details__name">Comfortable Brown Scarf</div>
                  <div class="featured-product__list__item__details__price">$28.74</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/2.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">BAGS</div>
                  <div class="featured-product__list__item__details__name">Fashional Handbag</div>
                  <div class="featured-product__list__item__details__price">$83.32</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/3.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">SHOES</div>
                  <div class="featured-product__list__item__details__name">Converse Season Shoes</div>
                  <div class="featured-product__list__item__details__price">$140.00</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/4.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">BAGS</div>
                  <div class="featured-product__list__item__details__name">A Dress-suit Valise</div>
                  <div class="featured-product__list__item__details__price">$28.74</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/5.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">WATCH</div>
                  <div class="featured-product__list__item__details__name">Fashion Electric Wrist Watch</div>
                  <div class="featured-product__list__item__details__price">$472.14</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/6.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">WOMEN'S</div>
                  <div class="featured-product__list__item__details__name">Fashional Handbag</div>
                  <div class="featured-product__list__item__details__price">$72.34</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/7.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">COSMETIC</div>
                  <div class="featured-product__list__item__details__name">Flush Blue Tank</div>
                  <div class="featured-product__list__item__details__price">$16.45</div>
                </div>
              </div>
              <div class="featured-product__list__item">
                <div class="featured-product__list__item__img">
                  <img src="/images/products/8.jpg" alt="featuted-product"/>
                </div>
                <div class="featured-product__list__item__details">
                  <div class="featured-product__list__item__details__tag">SHOES</div>
                  <div class="featured-product__list__item__details__name">Women's Red Sneaker</div>
                  <div class="featured-product__list__item__details__price">$49.76</div>
                </div>
              </div>
            </div>
          </div>
          <!-- main content end -->
          <div class="main-banner">
            <div class="main-banner-content-wrapper">
              <div class="main-banner-content">
                <h4 class="main-banner-content--text-center">COMING SOON</h4>
                <h2 class="main-banner-content--text-center"><span>Black Friday</span> Sale</h2>
                <p class="main-banner-content--text-center">Get 10% Off First Order</p>
              </div>
            </div>
          </div>
          <div class="products-list">
            <div class="products">
              <h4>Sale Products</h4>
              <div class="product-list">
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product10.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Hand Electric cell</h3>
                    <span>$26.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product11.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Man's Fashion Hood</h3>
                    <span>$39.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product12.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Women's Fashion Jeans Clothing</h3>
                    <span>$199.00</span>
                  </div>
                </div>
              </div>
            </div> 
            <div class="products">
              <h4>Latest Products</h4>
              <div class="product-list">
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product10.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Hand Electric cell</h3>
                    <span>$26.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/product11.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Man's Fashion Hood</h3>
                    <span>$39.00</span>
                  </div>
                </div>
                <div class="product">
                    <div class="product__image">
                      <img src="/images/product12.jpg" alt="product"/>
                    </div>
                    <div class="product__detail">
                      <h3>Women's Fashion Jeans Clothing</h3>
                      <span>$199.00</span>
                    </div>
                </div>
              </div>
            </div> 
            <div class="products">
              <h4>Best of the Week</h4>
              <div class="product-list">
                <div class="product">
                  <div class="product__image">
                    <img src="/images/products/15.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Hand Electric cell</h3>
                    <span>$26.00</span>
                  </div>
                </div>
                <div class="product">
                  <div class="product__image">
                    <img src="/images/products/16.jpg" alt="product"/>
                  </div>
                  <div class="product__detail">
                    <h3>Man's Fashion Hood</h3>
                    <span>$39.00</span>
                  </div>
                </div>
                <div class="product">
                    <div class="product__image">
                      <img src="/images/products/17.jpg" alt="product"/>
                    </div>
                    <div class="product__detail">
                      <h3>Women's Fashion Jeans Clothing</h3>
                      <span>$199.00</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

module.exports = {
  render,
};
