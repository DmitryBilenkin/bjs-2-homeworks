// Задача 1

function cachingDecoratorNew(func){
  let cache =[];
  return function addInCache (...args){
    let hashObject = {};
    hashObject.hash = args.join(',');

    let objectInCache = cache.find((item) => item.hash === hashObject.hash);
      if(objectInCache){
        let result = objectInCache.value;

        console.log(`Из кэша: ${result}`);
        console.log('Элементов в кэшэ:' + ' ' + cache.length);

        return `Из кэша: ${result}`;
      } else {
        hashObject.value = func(...args);
        let result = hashObject.value;        
        cache.push(hashObject);

        console.log(`Вычисляем: ${result}`);

            if(cache.length > 5){
              cache.shift();
              console.log('Хэш удален');
            };

            console.log('Элементов в кэшэ:' + ' ' + cache.length);

        return `Вычисляем: ${result}`;
      }
  }
}

// Задача 2

function debounceDecoratorNew(func, throttlDelay) {
  let isTrottled = false;
  console.log('флаг поднят при первом вызове троттл декоратора'); // для отладки  
  
  function wrapper (signalOrder, debuonceDelay){
    wrapper.allCount += 1;

    if (isTrottled){
      return  console.log(`флаг все еще опущен, вызов ${signalOrder} ${debuonceDelay}проигнорирован`); // для отладки
    }
    
    isTrottled = true;
    console.log('флаг опущен'); // для отладки

    let result = func(signalOrder, debuonceDelay);
    wrapper.count += 1;
    console.log(`функция вызвана через ${debuonceDelay} и добавлена метка в count`); // для отладки
    
    setTimeout(() => {
      isTrottled = false;
      console.log('флаг поднят снова через' + ' ' + throttlDelay); // для отладки
    }, throttlDelay);
    console.log('запланированно поднятие флага через' + ' ' + throttlDelay); // для отладки

    return result;
  }  
  
  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;

  
}