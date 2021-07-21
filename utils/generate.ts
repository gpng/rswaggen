const wrap = (str: string): string => `&${str}&`;

const parseSingle = (obj: unknown): object => {
  switch (typeof obj) {
    case 'number':
      return {
        [wrap('type')]: wrap(':number'),
        [wrap('description')]: '',
      };
    case 'string':
      return {
        [wrap('type')]: wrap(':string'),
        [wrap('description')]: '',
      };
    case 'boolean':
      return {
        [wrap('type')]: wrap(':boolean'),
        [wrap('description')]: '',
      };
  }
  if (!obj)
    return {
      // default to string cos we can't tell what type is it
      [wrap('type')]: wrap(':string'),
      [wrap('description')]: '',
      [wrap("'x-nullable'")]: true,
    };

  if (Array.isArray(obj)) {
    return {
      [wrap('type')]: wrap(':array'),
      [wrap('items')]: parseSingle(obj[0]),
    };
  }

  const properties = {};
  Object.keys(obj).forEach((key) => {
    properties[wrap(key)] = parseSingle(obj[key]);
  });
  return {
    [wrap('type')]: wrap(':object'),
    [wrap('properties')]: properties,
    [wrap('required')]: wrap('%w[]'),
  };
};

const parse = (data: object): string => {
  let str = JSON.stringify(parseSingle(data), null, 4);
  str = str.split('&"').join('');
  str = str.split('"&').join('');
  // remove first brackets
  str = str.substring(2);
  // remove last brackets
  str = str.substring(0, str.length - 2);
  return str;
};

export default parse;
