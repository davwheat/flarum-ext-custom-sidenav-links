import Component from 'flarum/common/Component';
import Select from 'flarum/common/components/Select';

export default class SettingValueInput extends Component {
  view() {
    return (
      <Select
        type="text"
        className={`FormControl ${this.attrs.class}`}
        disabled={!!this.attrs.disabled}
        value={this.attrs.value}
        onchange={this.onChange.bind(this)}
        options={this.attrs.options}
      />
    );
  }

  onChange(value: string) {
    if (typeof this.attrs.onChange === 'function') {
      this.attrs.onChange(value);
    }
  }
}
