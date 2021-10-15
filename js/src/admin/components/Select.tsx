import Component from 'flarum/common/Component';
import Select from 'flarum/common/components/Select';

interface ISettingValueInputAttrs<T> {
  class: string;
  disabled: boolean;
  value: string;
  options: Array<{ value: T; label: string | string[] }>;
  onChange?: (newValue: T) => void;
}

export default class SettingValueInput<T> extends Component<ISettingValueInputAttrs<T>> {
  view() {
    return (
      <Select
        className={`FormControl ${this.attrs.class}`}
        disabled={!!this.attrs.disabled}
        value={this.attrs.value}
        onchange={this.onChange.bind(this)}
        options={this.attrs.options}
      />
    );
  }

  onChange(value: T) {
    if (typeof this.attrs.onChange === 'function') {
      this.attrs.onChange(value);
    }
  }
}
