import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-9xl">
          {/* TODO TAKE PROPER COLOR FROM SOME "THEME" */}
          {/* TODO SPLIT INTO SEPARATE COMPONENTS */}
          <span className="font-thin">Boli mnie </span>
          <span>web</span>
          <span className="text-red-700">.</span>
        </h1>
        <p>
          blog o technologiach i narzędziach webowych oraz o wszystkim co mnie
          interesuje / wk*rwia / bawi i smuci w branży IT
        </p>
      </section>
      <section>
        <h2 className="text-4xl">Ostatnie wpisy</h2>
        <div className="flex gap-2">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-4xl">Więcej info</h2>
      </section>
      <section>
        <h2 className="text-4xl">Aktywność</h2>
      </section>
      <footer>
        <div>boli mnie web</div>
        <div>Projekt i realizacja - Adam Knieć</div>
        <div>
          <div>link insta github stack</div>
        </div>
      </footer>
    </>
  );
}
