import { ReactNode } from "react"
import { Form, Link } from "react-router-dom"
import { Button } from "./ui/button"
import FormInput from "./FormInput"

const Filters = ({term, mode}: {term: string | undefined; mode :string }): ReactNode => {
  console.log(mode)
  return (
    <Form>
        <FormInput 
          type="search" 
          label="Search for"
          name="term" 
          defaultValue={term}
          placeholder="'m45' 'neutron star' 'starship'"
        />
        <div>
            <Button type="submit"  size="lg">Search</Button>
            <Button type="button" variant="outline" size="lg">
              <Link to="/news">Reset</Link></Button>
        </div>

    </Form>
  )
}

export default Filters