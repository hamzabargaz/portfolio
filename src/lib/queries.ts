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

const TotalPosts = `
query posts_count {
  all_postsConnection {
    aggregate {
      count
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
      seo {
        openGraph {
          authors
          type
          url
          siteName
        }
        twitter {
          site
          creator
        }
      }
    }
  }
`;

const Author = `
query Author($id: ID!) {
  author(where: {id: $id}) {
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
      icon_light {
        id
        url
      }
      icon_dark {
        id
        url
      }
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
      title_section
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

export { AllPosts, TotalPosts, SinglePost, Author, AllFeatures };
