import { Input } from "antd";
import './styles.css'

const { Search } = Input;

const SearchClients = ({ onSearch }) => {
  return (
    <Search
      placeholder="Nome a ser pesquisado"
      onSearch={onSearch}
      allowClear
      className='search-box'
    />
  )
}

export default SearchClients;