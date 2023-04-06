from django.test import TestCase

# Create your tests here.
import unittest
from apps import apps
from supertest import TestApp

class TestBlogApp(unittest.TestCase):

    def test_get_root_url(self):
        response = TestApp(app).get('/')
        self.assertEqual(response.status_code, 200)

    def test_get_invalid_url(self):
        response = TestApp(app).get('/invalid-url')
        self.assertEqual(response.status_code, 404)

    def test_get_blog_posts(self):
        response = TestApp(app).get('/blog/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Blog Posts', response.text)
        self.assertIn('First blog post', response.text)
        self.assertIn('Second blog post', response.text)

    def test_get_first_blog_post(self):
        response = TestApp(app).get('/blog/1/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('First blog post', response.text)
        self.assertIn('Lorem ipsum dolor sit amet', response.text)

    def test_get_second_blog_post(self):
        response = TestApp(app).get('/blog/2/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Second blog post', response.text)
        self.assertIn('Sed ut perspiciatis unde omnis iste', response.text)

if __name__ == '__main__':
    unittest.main()
