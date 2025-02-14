class Item{
  constructor(name, sell_in, quality){
      this.name = name;
      this.sell_in = sell_in;
      this.quality = quality;
  }
}


class CheezeItem extends Item{
  updateQuality(){
    this.sell_in--;
    if(this.quality < 50){
      this.quality++;
    }
  }
}

class BackstagePassItem extends Item{
  
  updateQuality(){
    this.sell_in--;
    if(this.sell_in <= 10 && this.sell_in > 5){
      this.quality += 2;
    }else if(this.sell_in <= 5 && this.sell_in > 0 ){
      this.quality += 3;
    }else if(this.sell_in === 0){
      this.quality = 0;
    }else{
      this.quality++;
    }
  }
}

class ConjuredItem extends Item{
  
}

class LegendaryItem extends Item{
  
}

class BasicItem{
  updateQuality(){
    
  }
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new CheezeItem('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
