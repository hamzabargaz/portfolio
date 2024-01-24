const AllPosts = `
query AllPosts {
    all_posts {
      id
      title
      slug
      excerpt
      date
      tags
      hero_image {
        url
        height
        width
      }
    }
  }
`;

const SinglePost = `
query SinglePost($slug: String!) {
    post(where: {slug: $slug}) {
      slug
      title
      tags
      date
      hero_image {
        url
        width
        height
      }
      content {
        raw
      }
    }
  }
`;

const Author = `
query Author($website_url: String = "https://bargaz.me/") {
  author(where: {website_url: $website_url}) {
    full_name
    intro
    website_url
    id
    avatar {
      url
      width
      height
    }
    author_social_Media {
      id
      name
      url
    }
    seo {
      title
      description
      url
      openGraph {
        title
        description
        type
        siteName
        url
        images {
          url
          width
          height
        }
      }
      twitter {
        card
        creator
        description
        title
        site
        image {
          url
        }
      }
    }
    about {
      raw
    }
  }
}

`;

const AllFeatures = `
query AllFeatures {
    all_features {
      id
      name
      start_date
      end_date
      location
      description
      tags
      icon {
        url
        width
        height
      }
    }
  }
`;

export { AllPosts, SinglePost, Author, AllFeatures };
