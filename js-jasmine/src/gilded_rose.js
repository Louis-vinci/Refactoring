class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          this.function3(this.items[i]);
        }
      } else if (this.items[i].quality < 50) {
          this.addQuality(this.items[i], 1);
          this.updateBackstagePass(this.items[i]);
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        this.updateExpiredItem(this.items[i]);
      }
    }

    return this.items;
  }

  addQuality(item, i) {
    item.quality = item.quality + i;
  }

  updateExpiredItem(item) {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            this.function3(item);
          }
         else {
          this.addQuality(item, item.quality);
        }
      } else {
        if (item.quality < 50) {
          this.addQuality(item, 1);
        }
      }
    }

    updateBackstagePass(item) {
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            this.addQuality(item, 1);
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            this.addQuality(item, 1);
          }
        }
      }
    }

    function3(item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            this.addQuality(item, -1);
        }
    }

}
module.exports = {
  Item,
  Shop
}