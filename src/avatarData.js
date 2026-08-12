const avatarMap = {
  Godfrey: {
    emoji: '🧢',
    bg: '#DCEBFA',
    color: '#3A6EA5'
  },
  Kenny: {
    emoji: '🌟',
    bg: '#FFF1C9',
    color: '#C98A00'
  },
  Freda: {
    emoji: '🌷',
    bg: '#FDE2EC',
    color: '#C45A7A'
  },
  Bettie: {
    emoji: '🍒',
    bg: '#E9D8FD',
    color: '#7A4EAB'
  },
  Cesar: {
    emoji: '🌿',
    bg: '#DFF4E4',
    color: '#3F8F5A'
  },
  Emily: {
    emoji: '🐰',
    bg: '#FFE6D5',
    color: '#D97941'
  },
  Mellow: {
    emoji: '☁️',
    bg: '#DDEEFF',
    color: '#5B84B1'
  },
  Liu: {
    emoji: '🍀',
    bg: '#DDF7E3',
    color: '#4E9F6D'
  },
  Mara: {
    emoji: '🐱',
    bg: '#FFE1D6',
    color: '#C86B4A'
  },
  Yani: {
    emoji: '✨',
    bg: '#FFF4CC',
    color: '#B8860B'
  },
  Xiaoyu: {
    emoji: '🐟',
    bg: '#DDEBFF',
    color: '#4F6FAE'
  }
}

export function getAvatarData(firstName) {
  return (
    avatarMap[firstName] || {
      emoji: '😊',
      bg: '#E8E8E8',
      color: '#666666'
    }
  )
}