export function getMultiArrayData<T>(data: T[], count: number = 2): T[][] {
  const result: T[][] = [];
  let child: T[] = [];

  data.forEach((option, index) => {
    child.push(option);
    if (child.length > count - 1) {
      result.push(child);
      child = [];
    } else if (index === data.length - 1) {
      result.push(child);
    }
  });
  return result;
}

export function getOneLineText(text: string) {
  const splitText = text.split('<br>').join('');
  const nextSplit = splitText.split('<p>').join('');
  const result = nextSplit.split('</p>').join('');

  return result;
}

export function toObjWithExistValue(obj: any) {
  let newObj = {} as { [key: string]: any };
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

export function getDiscountInfo(
  totalPrice: number,
  sections: number[],
  discountRates: number[]
) {
  if (totalPrice < sections[0]) {
    return [
      Math.ceil((totalPrice * discountRates[0]) / 100),
      discountRates[0],
      sections[0] - totalPrice,
      discountRates[1],
    ];
  }
  if (sections[0] <= totalPrice && totalPrice < sections[1]) {
    return [
      Math.ceil((totalPrice * discountRates[1]) / 100),
      discountRates[1],
      sections[1] - totalPrice,
      discountRates[2],
    ];
  }
  if (sections[1] <= totalPrice && totalPrice < sections[2]) {
    return [
      Math.ceil((totalPrice * discountRates[2]) / 100),
      discountRates[2],
      sections[2] - totalPrice,
      discountRates[3],
    ];
  }
  return [
    Math.ceil((totalPrice * discountRates[3]) / 100),
    discountRates[3],
    0,
    discountRates[3],
  ];
}

export function toBodyStyleHidden(onOff: boolean) {
  const body = document.querySelector('body') as HTMLElement;

  if (onOff) {
    body.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.height = '100%';
  } else {
    body.removeAttribute('style');
  }
}

export function toPhoneNumber(phone: string) {
  const phoneArr =
    phone.length === 11
      ? [phone.slice(0, 3), phone.slice(3, 7), phone.slice(7)]
      : [phone.slice(0, 3), phone.slice(3, 6), phone.slice(6)];
  const result = phoneArr.join('-');

  return result;
}

export function toCommaString(
  list: { id: number | string; name: string }[],
  type: 'id' | 'name'
) {
  const commaString = list.reduce((acc, crr) => {
    if (!acc.length) {
      return `${crr[type]}`;
    }
    return `${acc},${crr[type]}`;
  }, '');

  return commaString;
}

export function getLastCardNum(cardNum: string) {
  const cardNumArr = cardNum.split('*');
  const lastCardNum = cardNumArr[cardNumArr.length - 1];

  return lastCardNum;
}

export function toHexColorCode(color: string) {
  switch (color) {
    case 'RED':
      return '#ec1918';
    case 'YELLOW':
      return '#f4d425';
    case 'GREEN':
      return '#35b402';
    case 'BLUE':
      return '#3330fd';
    case 'WHITE':
      return '#ffffff';
    case 'GREY':
      return '#8b8b8b';
    case 'PINK':
      return '#ffc4db';
    default:
      return '#fff';
  }
}

export function toEllipsisStr(str: string, num?: number) {
  const strLen = str.length;
  if (strLen > 3) {
    return `${str.slice(0, num ?? 3)}...`;
  } else {
    return str;
  }
}

//mobile check
export function checkMobile() {
  const isMobile =
    /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (isMobile) {
    const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.indexOf('android') > -1) {
      //안드로이드
      return 'android';
    } else if (
      varUA.indexOf('iphone') > -1 ||
      varUA.indexOf('ipad') > -1 ||
      varUA.indexOf('ipod') > -1
    ) {
      //IOS
      return 'ios';
    } else {
      //아이폰, 안드로이드 외
      return 'other';
    }
  } else {
    return 'deskTop';
  }
}

export function tagToString(str: string) {
  const newStrList = str
    .split('<br>')
    .map((str) => str.replace('<p>', '').replace('</p>', '').replace('\n', ''));

  return newStrList.join(' ');
}

export function getExistData(list: any[], checkList: any[], isValue?: boolean) {
  let existList = [] as any[];
  checkList.forEach((checkItem) => {
    list.forEach((item) => {
      if (!isValue) {
        if (checkItem === item.id.toString()) {
          existList.push({ id: item.id, name: item.name });
        }
      } else {
        if (checkItem === item.value) {
          existList.push({ id: item.value, name: item.name });
        }
      }
    });
  });

  return existList;
}

export function getCircleNumber(num: number) {
  switch (num) {
    case 1:
      return '①';
    case 2:
      return '②';
    case 3:
      return '③';
    case 4:
      return '④';
    case 5:
      return '⑤';
    case 6:
      return '⑥';
    case 7:
      return '⑦';
    case 8:
      return '⑧';
    default:
      return '④';
  }
}
