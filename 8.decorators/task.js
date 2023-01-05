// Задача 1

function cachingDecoratorNew(func){
  let cache =[];
  return function addInCache (...args){
    let hashObject = {};
    hashObject.hash = args.join(',');

    let objectInCache = cache.find((item) => item.hash === hashObject.hash);
      if(objectInCache){
        let result = objectInCache.value;
        return `Из кэша: ${result}`;
      }

      hashObject.value = func(...args);
      let result = hashObject.value;        
      cache.push(hashObject);

      if(cache.length > 5){
        cache.shift();
      };

      return `Вычисляем: ${result}`;
    }
  }


// Задача 2

function debounceDecoratorNew(func, debounceDecorDelay){
  let timeoutId = null;  

  function wrapper (signalOrder, debounceDelay){
    wrapper.allCount += 1;    
    
    if (timeoutId){
      clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(() => {
      func(signalOrder, debounceDelay);  
      timeoutId = null;
      wrapper.count += 1;
    }, debounceDecorDelay);
  }

    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}
