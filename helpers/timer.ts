class Timer {
  timer: ReturnType<typeof setTimeout> | null;

  constructor() {
    this.timer = null;
  }

  debounce(func : () => void, ms : number) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(func, ms);
  }
}

export default Timer;
