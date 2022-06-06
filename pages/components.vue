<template>
  <div>
    <div class="py-4">
      <div class="container">
        <h2>Colors.</h2>
        <hr />
        <p>Change / add extra colors in variables.scss</p>
        <div class="bg-primary p-3 text-white">primary</div>
        <div class="bg-secondary p-3 text-white">secondary</div>
        <div class="bg-silver p-3">silver</div>
        <div class="bg-gray p-3 text-white">gray</div>
        <div class="bg-dark p-3 text-white">dark</div>
        <div class="bg-light p-3 text-white">light</div>
      </div>
    </div>
    <div class="py-4 bg-silver">
      <div class="container">
        <h2>Headings</h2>
        <hr />
        <p>
          Adjust heading font-size in variables.scss if needed / colors can be
          set with text-* helper class
        </p>
        <h1 class="h1">Heading 1.</h1>
        <h2 class="h2">Heading 2.</h2>
        <h2 class="text-primary">Heading 2 with text-primary class</h2>
        <h2 class="text-secondary">Heading 2 with text-secondary class</h2>
        <h3 class="h3">Heading 3.</h3>
        <h4 class="h4">Heading 4.</h4>
        <h5 class="h5">Heading 5.</h5>
        <h6 class="h6">Heading 6.</h6>
      </div>
    </div>
    <div class="py-4">
      <div class="container">
        <h2>Bodytext</h2>
        <hr />
        <div class="bodytext">
          <p>
            <em>Lorem ipsum</em> dolor sit amet,
            <a href="#">consectetur adipiscing</a> elit. In a hendrerit turpis.
            Aliquam placerat dui et feugiat sagittis. Donec efficitur leo et
            cursus bibendum.
          </p>
          <ul>
            <li>Duis ac scelerisque leo. Quisque</li>
            <li>molestie rutrum odio.</li>
            <li>Phasellus rhoncus lobortis fringilla.</li>
          </ul>
          <p>
            Suspendisse eu est massa. Quisque fringilla metus vel magna lobortis
            euismod. Donec dolor sapien, mollis sed ex non, placerat varius
            sapien. Sed in mi id lectus porta volutpat non vitae erat. Morbi
            dignissim ac velit non volutpat. Sed tempor, ipsum sed ultrices
            volutpat,
          </p>
          <p>
            diam dui lobortis ante, eu blandit nulla sem vel nisl. Donec sit
            amet nunc id justo lobortis rutrum. Pellentesque elementum, enim sit
            amet dignissim maximus, lacus nisi luctus nisi, non consequat mi mi
            eu ipsum. Morbi commodo rhoncus ex, id iaculis neque aliquam et.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Duis non sem non est ultrices bibendum. Sed
            quis eros nec sapien vehicula tincidunt. Donec vitae egestas urna
          </p>
        </div>
      </div>
    </div>

    <div class="bg-silver py-6 mb-5">
      <div class="container rhythm-mb-3">
        <h2>Buttons</h2>
        <hr />
        <p>
          Update button styles in variables.scss (primary, secondary,
          btn-font-size,... ) / add extra button-types in
          bootstrap-overrides.scss
        </p>
        <div>
          <BaseButton variant="link" label=".btn-link" />
        </div>
        <div>
          <BaseButton variant="primary" label=".btn-primary" />
        </div>
        <div>
          <BaseButton variant="outline-primary" label=".btn-outline-primary" />
        </div>
        <div>
          <BaseButton variant="secondary" label=".btn-secondary" />
        </div>
        <div>
          <BaseButton
            variant="outline-secondary"
            label=".btn-outline-secondary"
          />
        </div>
        <div>
          <BaseButton variant="outline-white" label=".btn-outline-white" />
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Cover component</h2>
      <hr />
    </div>
    <Cover
      prefix="cover prefix"
      title="This is a hero cover"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a hendrerit turpis. Aliquam placerat dui et feugiat sagittis. Donec efficitur leo et cursus bibendum. "
      image="/img/mountains.jpg"
      cover-type="hero"
      h-align="center"
      v-align="center"
      :buttons="[
        {
          title: 'Contacteer ons',
          url: '/contact',
        },
        {
          title: 'Maak afspraak',
          modal: 'calendly',
        },
      ]"
    />
    <Cover
      title="This is a left aligned narrow cover"
      image="/img/mountains.jpg"
      cover-type="narrow"
      h-align="start"
      v-align="center"
      text-align="left"
    />
    <div class="py-4">
      <div class="container">
        <h2>MediaText</h2>
        <hr />
        <MediaText
          title="Title goes here"
          body="Lorem ipsum dolor sit ametLorem ipsum dolor sit ame tLorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          :buttons="[{ title: 'Lees meer', url: '/contact' }]"
          :image="{ url: '/img/mountains.jpg' }"
          align="center"
          text-align="right"
        />
        <MediaText
          title="Title goes here"
          body="Lorem ipsum dolor sit ametLorem ipsum dolor sit ame tLorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          :buttons="[{ title: 'Lees meer', url: '/contact' }]"
          :image="{ url: '/img/mountains.jpg' }"
          align="center"
          text-align="right"
          :flip="true"
        />
      </div>
    </div>

    <div class="py-4">
      <div class="container">
        <h2>Intro</h2>
        <hr />
      </div>
      <Intro
        title="Title"
        prefix="prefix"
        text-align="center"
        body="Lorem ipsum dolor sit ametLorem ipsum dolor sit ame tLorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      />
    </div>

    <div class="py-4">
      <div class="container">
        <h2>FAQ</h2>
        <hr />
        <Faq
          :items="[
            {
              title: 'Vraag?',
              body:
                'Ut enim ad minim veniam magna aliqua que inter eiusmod tempor inter op incididunt ut labore et',
            },
            {
              title: 'Vraag 2?',
              body:
                'Ut enim ad minim veniam magna aliqua que inter eiusmod tempor inter op incididunt ut labore et',
            },
            {
              title: 'Vraag 3?',
              body:
                'Ut enim ad minim veniam magna aliqua que inter eiusmod tempor inter op incididunt ut labore et',
            },
          ]"
        />
      </div>
    </div>

    <div class="py-4">
      <div class="container">
        <h2>Team</h2>
        <hr />
        <Team
          :items="[
            { name: 'John Doe', jobtitle: 'CEO', image: '/img/mountains.jpg' },
            { name: 'John Doe', jobtitle: 'CEO', image: '/img/mountains.jpg' },
            { name: 'John Doe', jobtitle: 'CEO', image: '/img/mountains.jpg' },
            { name: 'John Doe', jobtitle: 'CEO', image: '/img/mountains.jpg' },
            { name: 'John Doe', jobtitle: 'CEO', image: '/img/mountains.jpg' },
          ]"
        />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h2>Teasers</h2>
        <hr />
        <div class="row">
          <div
            class="col-sm-6 col-md-4"
            v-for="index in [1, 2, 3]"
            :key="index"
          >
            <Teaser
              title="This is a Teaser"
              excerpt="Lorem ipsum dolor sit amet"
              image="/img/mountains.jpg"
              link="/"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-4">
      <div class="container">
        <h2>Contact Form</h2>
        <hr />
      </div>
      <div class="py-4 bg-silver">
        <div class="container">
          <ContactForm />
        </div>
      </div>
    </div>

    <div class="py-4">
      <div class="container">
        <h2>USP's</h2>
        <hr />
      </div>
      <Usp
        title="Titel"
        :items="[
          {
            title: 'Usp title 1',
            body: 'blablab blabla blabla blabla',
            url: '/contact',
          },
          {
            title: 'Usp title 2',
            body: 'blablab blabla blabla blabla',
            url: '/contact',
          },
          {
            title: 'Usp title 3',
            body: 'blablab blabla blabla blabla',
            url: '/contact',
          },
        ]"
      />
    </div>

    <div class="py-4">
      <div class="container">
        <h2>Map</h2>
        <hr />
        <Map
          :markers="[
            {
              title: 'Grote Markt',
              location: { lat: 51.21433999159337, lng: 4.255818473706007 },
            },
          ]"
        />
      </div>
    </div>
    <div class="py-4">
      <div class="container">
        <h2>Testimonials</h2>
        <hr />
        <Testimonials
          title="Testimonials title"
          :items="[
            {
              author: 'Dimitri Desender',
              quote:
                'Blabla blab bla blablabla Blabla blab bla blablabla Blabla blab bla blablablaBlabla blab bla blablabla',
            },
          ]"
        />
      </div>
    </div>
    <div class="py-4">
      <div class="container">
        <h2>Teaser Slider</h2>
        <hr />
      </div>
      <TeaserSlider
        title="Teaser slider title"
        :items="[
          {
            title: 'This is a Teaser',
            excerpt: 'Lorem ipsum dolor sit amet',
            image: '/img/mountains.jpg',
            link: '/',
          },
          {
            title: 'This is a Teaser',
            excerpt: 'Lorem ipsum dolor sit amet',
            image: '/img/mountains.jpg',
            link: '/',
          },
          {
            title: 'This is a Teaser',
            excerpt: 'Lorem ipsum dolor sit amet',
            image: '/img/mountains.jpg',
            link: '/',
          },
          {
            title: 'This is a Teaser',
            excerpt: 'Lorem ipsum dolor sit amet',
            image: '/img/mountains.jpg',
            link: '/',
          },
          {
            title: 'This is a Teaser',
            excerpt: 'Lorem ipsum dolor sit amet',
            image: '/img/mountains.jpg',
            link: '/',
          },
        ]"
      />
    </div>
  </div>
</template>
