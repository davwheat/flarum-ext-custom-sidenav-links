import Component from 'flarum/common/Component'
import extractText from 'flarum/common/utils/extractText'

export default class SettingValueInput extends Component {
  view() {
    return (
      <input
        type="text"
        aria-labelled-by={this.attrs.labelId}
        className={`FormControl ${this.attrs.class}`}
        placeholder={extractText(this.attrs.placeholder)}
        disabled={!!this.attrs.disabled}
        value={this.attrs.value}
        onchange={this.onChange.bind(this)}
      />
    )
  }

  onChange(e: InputEvent) {
    if (typeof this.attrs.onChange === 'function') {
      // @ts-ignore
      const target: HTMLInputElement = e.target
      this.attrs.onChange(target.value, target)
    }
  }
}
