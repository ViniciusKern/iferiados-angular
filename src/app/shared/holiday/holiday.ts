export class Holiday {
  name: string;
  type: string;
  typeId: number;
  info: string;
  date: Date;

  constructor(
    name: string,
    typeId: number,
    type: string,
    date: string,
    mobileDates: any,
    info: string
  ) {
    this.name = name;
    this.typeId = typeId;
    this.type = type;
    this.info = info;

    if (mobileDates) {
      this.initMobileDate(mobileDates);
    } else {
      this.initDate(date);
    }
  }

  countdown() {
    let today = new Date();

    if (
      today.getDate() == this.date.getDate() &&
      today.getMonth() == this.date.getMonth() &&
      today.getFullYear() == this.date.getFullYear()
    ) {
      return 'É hoje!';
    }

    var diff = Math.ceil((this.date.getTime() - today.getTime()) / 86400000);

    if (diff == 1) {
      return 'Falta 1 dia!';
    } else {
      return 'Faltam ' + diff + ' dias!';
    }
  }

  fullDate() {
    return this.formatDate({
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      weekday: 'long',
    });
  }

  dayOfMonth() {
    return this.formatDate({
      day: '2-digit',
    });
  }

  month() {
    return this.formatDate({
      month: 'long',
    });
  }

  id() {
    return this.name + '-' + this.type;
  }

  private formatDate(options: any) {
    return this.date.toLocaleDateString('pt-BR', options);
  }

  private initDate(date: string) {
    let today = new Date();

    let currentYear = today.getFullYear();
    let month = parseInt(date.substring(0, 2)) - 1;
    let day = parseInt(date.substring(3));

    this.date = new Date(currentYear, month, day);

    if (this.date < today) {
      this.date = new Date(currentYear + 1, month, day);
    }
  }

  private initMobileDate(dates: [any]) {
    let currentYear = new Date().getFullYear();
    this.initDate(dates[currentYear]);
  }
}
