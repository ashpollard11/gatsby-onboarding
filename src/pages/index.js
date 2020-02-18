import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
	<Link to="/contact/">Contact</Link>
	<Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
	<img src="https://source.unsplash.com/random/400x200" alt="" />
	<p>
		What do I like to do? Lots of course but definitely enjoy building
		websites.
	</p>
  </Layout>
)
