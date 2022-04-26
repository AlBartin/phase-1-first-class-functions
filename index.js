const receivesAFunction = (callBackFun) => callBackFun();

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => function(){};