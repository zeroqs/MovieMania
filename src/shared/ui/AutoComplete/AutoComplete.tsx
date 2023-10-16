import { SearchOutlined } from '@ant-design/icons'
import {
  AutoComplete as AntAutoComplete,
  AutoCompleteProps as AntAutoCompleteProps,
} from 'antd'

interface AutoCompleteProps extends AntAutoCompleteProps {
  className?: string
  placeholder?: string
}

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 24,
      color: '#b6b5b5',
    }}
  />
)
export const AutoComplete = ({
  className,
  options,
  placeholder,
  ...props
}: AutoCompleteProps) => {
  return (
    <AntAutoComplete
      popupClassName="certain-category-search-dropdown"
      style={{ width: '100%' }}
      placeholder={placeholder}
      options={options}
      size="large"
      suffixIcon={suffix}
      {...props}
    />
  )
}
